import type { Metadata } from 'next';

import { ImageGallery } from '../_components/image-gallery';
import { ImageUploader } from '../_components/image-uploader';

export const metadata: Metadata = {
  title: 'Gallery - PaperFrame',
};

export default function Gallery() {
  return (
    <div className="mt-20 flex w-full flex-col items-center gap-4">
      <div className="flex max-w-4xl items-center justify-between gap-4">
        <h1 className="flex-1 text-4xl font-extrabold tracking-tight lg:text-5xl">Gallery</h1>
        <ImageUploader />
      </div>
      <ImageGallery />
    </div>
  );
}
