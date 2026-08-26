'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Loader2, Upload, CheckCircle2, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PhotoUploadSlotProps {
    label: string;
    required: boolean;
    currentUrl?: string | null;
    onUpload: (file: File) => Promise<void>;
}

/** One named upload slot (e.g. "Vehicle Front"), with drag/drop, a preview
 *  of the current image, and the ability to drop a new file to replace it
 *  before final submission — matches the react-dropzone pattern already
 *  used for the blog featured-image uploader. */
export default function PhotoUploadSlot({ label, required, currentUrl, onUpload }: PhotoUploadSlotProps) {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (!file) return;
        setUploading(true);
        setError('');
        try {
            await onUpload(file);
        } catch (e: any) {
            setError(e?.message || 'Upload failed');
        } finally {
            setUploading(false);
        }
    }, [onUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/jpeg': [], 'image/png': [], 'image/webp': [] },
        maxFiles: 1,
        disabled: uploading,
    });

    return (
        <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-800 flex items-center gap-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div
                {...getRootProps()}
                className={cn(
                    'relative border-2 border-dashed rounded-xl aspect-video flex flex-col items-center justify-center cursor-pointer transition-colors overflow-hidden bg-gray-50',
                    isDragActive ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary/60',
                    uploading && 'pointer-events-none opacity-70'
                )}
            >
                <input {...getInputProps()} />
                {currentUrl ? (
                    <>
                        <img src={currentUrl} alt={label} className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                            <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                                <RefreshCw className="w-4 h-4" /> Replace
                            </span>
                        </div>
                        <CheckCircle2 className="absolute top-2 right-2 w-5 h-5 text-primary bg-white rounded-full" />
                    </>
                ) : uploading ? (
                    <Loader2 className="w-6 h-6 text-primary animate-spin" />
                ) : (
                    <div className="text-center px-2">
                        <Upload className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                        <p className="text-xs text-gray-500">Tap or drag to upload</p>
                    </div>
                )}
                {uploading && currentUrl && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Loader2 className="w-6 h-6 text-white animate-spin" />
                    </div>
                )}
            </div>
            {error && <p className="text-xs text-red-600">{error}</p>}
        </div>
    );
}
