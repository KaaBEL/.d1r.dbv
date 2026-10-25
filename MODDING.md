<!-- v.0.2.49 -->
1. [Shittalk](#shittalk)
2. [Codebase structure](#codebase-structure)
    1. [editor.html](#editorhtml)
    2. [_k_api.js](#_k_apijs)
    3. [code.js](#codejs)
3. [Extracting data](#extracting-data)
4. [Basic setup](#basic-setup)

## Shittalk

Up until now you were supposed to ask me, but since I plan to stop active development I'll at least throw our a documentation on how is the codebase built and give some examples on how to extract games data. If you've already looked into the `src/` directory you haven't scratched even the surface of DBVE (the shortest and most common abbreviation for Droneboi +Modular Spaceships editor), the actual source is equal to production page source and is apparent if you notice the up to date version for `dist/` directory:  
![dist/ and localhost_mod/ are up to date](./dist/assets/dist_is_up_to_date.png)  
*pic. 1, Dist directory*

## Codebase structure
As mentioned above the editor's source&production code is within `dist/` directory used fot root of the .D1R.DBV site's sources. `src/` then contains an alternative and experimental form for DBVE source code, which is what it could like if you wanted it as TS files, but stuck at only version 0.1.64T14. ...

All of the essential assets for rendering ships are within .JS files and the bare minimum is `editor.html`, `code/_k_api.js`, `code/code.js`, `code/editor.js`, can be run directly through file URL like `file:///C:Users/Name/Downloads/editor.html` (if you placed contents of `dist/` into Downloads dir). Even though the codebase is made of inline scripts, `code.js` being its core can be ran separately or with Node.js, but otherwise the 'proceeding' scrpits depend on eachother:  
![(editor.html > _k_api.js, **code.js**) > editor.js > (alphalunar.js, *unit_tests.js*)](./dist/assets/dependencies.svg)  
[*pic. 2, main codebase structure*](https://kaabel.github.io/.d1r.dbv/assets/dependencies.svg)  
The core files are extended by either appending more scripts to the page such as `alphalunar.js`, `unit_tests.js` or created scripts from browser extensions. There is also one script for [service worker](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register) initiated at beggining of `editor.js`.

### editor.html:  
In offline works alone without javascript files, showing the Welcome message, optionally display "enable javascript" message when javascript is disabled. Contains also javascript for default error alert with `window.onerror`, **replaces `WebSocket` with fake function** to break Live Servers auto reload, changes title to short form for tab and other little dynamic parts to the to document also based on URL parameters.
### _k_api.js:  
Serves as API for unifying events from various js input API to handle movement, pinch in/out and delegate uniform data for touches, mouse and in future other pointers. File also introduces some constatns such as F for empty functions and UDF for minified undefined, util functions and legacy global variables for early version of the events API: `touchdevice`, `press`, `move`, `contextmenu`, `over` and `init`, which are still used and mostly functional with existing `Command`s. Then initializes logs related to "Eval addon" command from alphalunar.js.
### code.js:  
This is file for all editing and ships/blocks data oriented code. WIP...

## Extracting data
As earlier mentioned all blocks data of the editor is within main javascript files, the data are are located all over the `code.js` favouring compacted and less explicit definitions, with the exception of block textures masks, overlays and paints atlases located within `editor.js` in form of [data URLs](https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/data#syntax). At runtime block data is stored per id in ['constant' properties of `Block` class/namespace](https://github.com/KaaBEL/.d1r.dbv/blob/b4eabeca019f2db4923ccae282d19fa2783d3e2e/dist/code/code.js#L2687-L2770), which gets generated with:
```js
Data.generateValues();
Data.generateNames();
Data.generateIDs();
```
Majority of the source data can be accessed with `Data.getData("blocks")`. As example you can use:
```js
Data.buildDB1DataJSON({fixAll: true}); // returns JSON string data about first Droneboi's blocks
Data.buildDB1DataJSON(); // in their form I used as source
```
or look at it as example for implementing custom data extraction functions.

Visual data from `editor.js` are stored in:
```js
Editor.imgMask; // mask for filling blocks with textures
Editor.imgOverlay; // overlay for printing static part
imgColor; // colors for painting the mask
Editor.loadTextures();
```
`loadTextures()` method contains the script used to generate these texture source files 

## Basic setup
On my PC localhost is ran for http://localhost:5500/.d1r.dbv/dist/editor.html?debug&http:=.localhost:8158&debug_feature=none&no=info
