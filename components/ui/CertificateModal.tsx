"use client";

import { Dialog } from "@headlessui/react";
import Image, { StaticImageData } from "next/image";
import { X } from "lucide-react";

interface Props {
    open: boolean;
    onClose: () => void;
    image: StaticImageData | null;
}

export default function CertificateModal({ open, onClose, image }: Props) {
    return (
        <Dialog open={open} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/80 backdrop-blur-md" />

            <div className="fixed inset-0 flex items-center justify-center p-6">
                <Dialog.Panel className="relative max-w-6xl">
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white"
                    >
                        <X size={20} />
                    </button>

                    {image && (
                        <Image src={image} alt="" className="rounded-2xl" />
                    )}
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
