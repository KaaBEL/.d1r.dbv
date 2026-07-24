// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/wicg-file-system-access/index.d.ts
// https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/69195c77f7cbfcfee8ff3cdaf4c2058a27994775/types/wicg-file-system-access/index.d.ts/
// but removed duplicate method declarations from ...\Microsoft VS Code\8a7abeba6e\resources\app\extensions\node_modules\typescript\lib\lib.dom.d.ts

export {};

declare global {
    interface FileSystemHandle {
        readonly kind: "file" | "directory";
        readonly name: string;

        isSameEntry(other: FileSystemHandle): Promise<boolean>;
        queryPermission(descriptor?: FileSystemHandlePermissionDescriptor): Promise<PermissionState>;
        requestPermission(descriptor?: FileSystemHandlePermissionDescriptor): Promise<PermissionState>;

        /**
         * @deprecated Old property just for Chromium <=85. Use `kind` property in the new API.
         */
        readonly isFile: boolean;

        /**
         * @deprecated Old property just for Chromium <=85. Use `kind` property in the new API.
         */
        readonly isDirectory: boolean;
    }
    var FileSystemHandle: {
        prototype: FileSystemHandle;
        new(): FileSystemHandle;
    };
    type FileSystemHandleUnion = FileSystemFileHandle | FileSystemDirectoryHandle;

    type FileExtension = `.${string}`;
    type MIMEType = `${string}/${string}`;

    interface FilePickerAcceptType {
        /**
         * @default ""
         */
        description?: string | undefined;
        accept?: Record<MIMEType, FileExtension | FileExtension[]> | undefined;
    }

    /**
     * https://wicg.github.io/file-system-access/#enumdef-wellknowndirectory
     */
    type WellKnownDirectory = "desktop" | "documents" | "downloads" | "music" | "pictures" | "videos";

    interface FilePickerOptions {
        types?: FilePickerAcceptType[] | undefined;
        /**
         * @default false
         */
        excludeAcceptAllOption?: boolean | undefined;
        startIn?: WellKnownDirectory | FileSystemHandle | undefined;
        id?: string | undefined;
    }

    interface OpenFilePickerOptions extends FilePickerOptions {
        /**
         * @default false
         */
        multiple?: boolean | undefined;
    }

    interface SaveFilePickerOptions extends FilePickerOptions {
        suggestedName?: string | undefined;
    }

    type FileSystemPermissionMode = "read" | "readwrite";

    interface DirectoryPickerOptions {
        id?: string | undefined;
        startIn?: WellKnownDirectory | FileSystemHandle | undefined;
        /**
         * @default "read"
         */
        mode?: FileSystemPermissionMode | undefined;
    }

    interface FileSystemPermissionDescriptor extends PermissionDescriptor {
        handle: FileSystemHandle;
        /**
         * @default "read"
         */
        mode?: FileSystemPermissionMode | undefined;
    }

    interface FileSystemHandlePermissionDescriptor {
        /**
         * @default "read"
         */
        mode?: FileSystemPermissionMode | undefined;
    }

    // TODO: Implemented natively in TS 5.1, remove
    interface FileSystemCreateWritableOptions {
        keepExistingData?: boolean | undefined;
    }

    interface FileSystemGetFileOptions {
        create?: boolean | undefined;
    }

    interface FileSystemGetDirectoryOptions {
        create?: boolean | undefined;
    }

    interface FileSystemRemoveOptions {
        recursive?: boolean | undefined;
    }

    // type WriteParams =
    //     | { type: 'write'; position?: number | undefined; data: BufferSource | Blob | string }
    //     | { type: 'seek'; position: number }
    //     | { type: 'truncate'; size: number };

    // type FileSystemWriteChunkType = BufferSource | Blob | string | WriteParams;

    // class FileSystemWritableFileStream extends WritableStream {
    //     write(data: FileSystemWriteChunkType): Promise<void>;
    //     seek(position: number): Promise<void>;
    //     truncate(size: number): Promise<void>;
    // }

    function showOpenFilePicker(
        options?: OpenFilePickerOptions & { multiple?: false | undefined },
    ): Promise<[FileSystemFileHandle]>;
    function showOpenFilePicker(options?: OpenFilePickerOptions): Promise<FileSystemFileHandle[]>;
    function showSaveFilePicker(options?: SaveFilePickerOptions): Promise<FileSystemFileHandle>;
    function showDirectoryPicker(options?: DirectoryPickerOptions): Promise<FileSystemDirectoryHandle>;

    // Old methods available on Chromium 85 instead of the ones above.

    interface ChooseFileSystemEntriesOptionsAccepts {
        description?: string | undefined;
        mimeTypes?: string[] | undefined;
        extensions?: string[] | undefined;
    }

    interface ChooseFileSystemEntriesFileOptions {
        accepts?: ChooseFileSystemEntriesOptionsAccepts[] | undefined;
        excludeAcceptAllOption?: boolean | undefined;
    }

    /**
     * @deprecated Old method just for Chromium <=85. Use `showOpenFilePicker()` in the new API.
     */
    function chooseFileSystemEntries(
        options?: ChooseFileSystemEntriesFileOptions & {
            type?: "open-file" | undefined;
            multiple?: false | undefined;
        },
    ): Promise<FileSystemFileHandle>;
    /**
     * @deprecated Old method just for Chromium <=85. Use `showOpenFilePicker()` in the new API.
     */
    function chooseFileSystemEntries(
        options: ChooseFileSystemEntriesFileOptions & {
            type?: "open-file" | undefined;
            multiple: true;
        },
    ): Promise<FileSystemFileHandle[]>;
    /**
     * @deprecated Old method just for Chromium <=85. Use `showSaveFilePicker()` in the new API.
     */
    function chooseFileSystemEntries(
        options: ChooseFileSystemEntriesFileOptions & {
            type: "save-file";
        },
    ): Promise<FileSystemFileHandle>;
    /**
     * @deprecated Old method just for Chromium <=85. Use `showDirectoryPicker()` in the new API.
     */
    function chooseFileSystemEntries(options: { type: "open-directory" }): Promise<FileSystemDirectoryHandle>;

    interface GetSystemDirectoryOptions {
        type: "sandbox";
    }

    interface FileSystemHandlePermissionDescriptor {
        /**
         * @deprecated Old property just for Chromium <=85. Use `mode: ...` in the new API.
         */
        writable?: boolean | undefined;
    }
}
