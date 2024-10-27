![logic nodes image](https://cdn.discordapp.com/attachments/1138568581223821432/1190805585176830053/nodes_explained.png?ex=6659badf&is=6658695f&hm=a63863a3d8c7dde1b0234f509c708767b5223978ff70dc6a11d31222c313df82&)
I promised making in depth explanation of Function Block numerical logic. The ncalc repository has [wiki that lists its features](https://ncalc.github.io/ncalc/articles/index.html )~~`https://github.com/ncalc/ncalc/wiki`~~  so I decided to investigate the DBCE implementation and explain Function Blocks more practically, here it is: (The last update of this tutorial happened 28.5.2024)

## The ultimate Function Block ( numerical logics ) tutorial

I'd like to begin with types introduction, this is the usual cause of expression being invalid, or going wrong due to low precision of the numbers. They’re variables types of C# programming language.

There's nine types I've encountered in processing of expressions and examples of where they can be found:
- `bool`: has values `true` and `false`, it is the result of comparison (`<`, `>`, `=`, ...) or logic operation (`!`, `&&`, ...).
- `byte`: I assume you are already familiar with binary numbers (if not go learn them, you will need it for understanding bitwise operations), it has 8-bit values `-127` through `128`, It is very unusual type and I can't recall how I got to this one.
- `int`: has 32-bit values `-2147483648` through `2147483647`, found as integer literal (it is the numbers occurring in programming code `123456789-1`, not values from variables `x-y`) of mathematical operations (`+`, `-`, `*`, ...).
- `Uint16`: has 16-bit values `0` through `65535`, values of this type are required for bitwise operations (`&`, `|`, `<<`, ...).
- `Uint32`: this one seems to be maximal bitwise operation value for Steam players on PC.
- `float`: is 32-bit floating point value, it can hold huge (1E38) and also very small (1E-38) thanks to variable precision. It can store up to 7 digit integer numbers until it starts to loose on quality. This type is used for all numeric outputs from logic blocks.
- `double`: is 64-bit floating point value, has greater range of possible values and it can store up to 15 digit integer numbers before it loses quality. It is used in fractional number literals (`77.0` or `1E-3`) or values exceed range of `float` or `int` of mathematical operations (`+`, `/`, ...). (Please jump over to next message if you are currently reading pins: https://discord.com/channels/749233290241769473/752599482796998677/1205383793276485684)
- `decimal`: 128-bit [according to Microsoft docs](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types#characteristics-of-the-floating-point-types), it's result type of `Abs` function and it's not compatible with all of others.
- `string`: is sequence of characters, [exactly as explained in ncalc wiki](https://ncalc.github.io/ncalc/articles/values.html#strings), if string content it is attempted to be converted to desired type (number or boolean) for operator operations or a function handles it on its own, which in case of default ncalc functions the same as for operators. To convert string to number a C#'s .NET converting is used, which has the same commas ',' behavior as for numerical inputs. (This might cause actual incompatibility issues)
- `DateTime`: just as useful as comparing strings, [see ncalc wiki too](https://ncalc.github.io/ncalc/articles/values.html#datetime).

[Read more about C# variable types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/types#835-simple-types) (link brought up by Toasty).

I will also get to the way how they are inspected, but I will explain related invalid expressions first. If you haven't checked out ncalc wiki do so now: https://ncalc.github.io/ncalc/articles/index.html, there are lists of all Functions and Operators which are not in the scope of this tutorial (you can search them up or get a tutorial for them, which I can add below). Beau also added Pi and E constants: https://discord.com/channels/749233290241769473/1138568581223821432/1196212990903599275 they're usable as well.

### Invalid expressions

Invalid expression is what I call when the expression colors red (since I found no one else mention it) meaning it won't be executed for launched vehicle. When the Expression is created the obviously uses to Evaluate with variables `x` = 1, `y` = 2, `z` = Pi set to values and if it throws error it's marked red invalid. You can test this yourself be trying expression `if(x!=1||y!=2||z!=Pi,'invalid',1)`, if you submit it with changing any of the not equal comparisons to equal, it will become invalid. It's because (I assume) `if` Function doesn't accept strings not containing number, just launch the vehicle and press with five fingers or press key F1 and you'll see red errors in opened debug console: `FormatException: Input string was not in correct format.` here you can see how easily the expression can be fooled, lag the game, but shows us presence of the string type.

For debugging it's easier to use just compact `if(x,1,[tested expression])`.

Other cause of invalid expression can be invalid output type, examples: `!0`, `'kot'`, `#2024/02/09#` and their valid counter parts showing those types in use `if(!0,1,0)`, `'123'` (applies the same for string converting), `if(#2024/02/09# > #2008/01/31#, 1, 0)`. There's no way yet to debug these. Before anything is done to Function block, Beau should display Error message of invalid expression in the settings tab of Function Block!  
![Function Block](https://cdn.discordapp.com/attachments/752599482796998677/1205383868270645259/image.png?ex=66595f35&is=66580db5&hm=966cc5b0eaf3d6336c227982c9ccefbc0dd78f0a11061f5f4fc87d192252ddfc&)

I am not sure whether to include a list with accepted types for Operators (`<>` = `!=`) and Functions (definitely not yet). But the most important one, it's safe to use numbers in `Uint16` range for bitwise operations. Be aware of the bitwise operation creating values in `Uint32` range, which are again not safe for bitwise operations, use [Multiplicative operators like modulo](https://ncalc.github.io/ncalc/articles/operators.html#multiplicative) `%` then instead.

Sometimes you will need to use `if(x>0,x,-x)` or even better `x*Sign(x)` instead of `Abs(x)`, because of `decimal` type outputted  by `Abs` Function.

### Space optimizations

As [explained in the ncalc wiki](https://ncalc.github.io/ncalc/articles/values.html#scientific-notation) you can use scientific notation for numbers, which means you can optimize
* `1000` into `1e3` or `1E3`
* `0.5` into `.5`
* `-0.32` into `-.32`
* `.00009` into `9E-5`
* `16777216` into `1<<24`

You can optimize the expression length by using brackets only when it's necessary, [operators precedence priority is listed in ncalc wiki](https://ncalc.github.io/ncalc/articles/operators.html).

`bool` type (logic) can be converted to number using bitwise operation and used further with numerical Operators or Functions. `x>y|0` can be for example used to output directly result of comparison as 1 or 0.

### Weird syntax

The `x`, `y`, `z`, `Pi` and `E` Parameters can also be put into square brackets `[x]`, double and single quotes `"y"+'z'` or even in backticks `` `Pi` ``.

You can put space characters between tokens (the inseparable parts?, have no idea myself), but apart from that it is possible to put non-ASCII characters, semicolons ";" and dots "." before values (tested only numbers) and input Parameters. This is completely valid expression, no problem: `-ň2.¡.;...;..if ( x,-3... . ...4,x+ôôô∅;ô.⁹⁶⁹⁶⁹;4)`.

I have also found unexplored very suspicious behavior of curly brackets in expressions, for example `if(x,69,{3e1+3}*{9-8})` returns 49, it certainly doesn't work as usual brackets "()".

Credits to Toasty for pointing out different flows and providing ncalc wiki source.  
