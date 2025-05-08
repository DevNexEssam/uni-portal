import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

// تكوين Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

/**
 * دالة لرفع ملف PDF إلى Cloudinary
 * @param buffer - محتوى الملف كـ Buffer
 * @param folder - المجلد الهدف في Cloudinary
 * @returns وعد يحمل رابط الملف ومعلوماته
 */
export const uploadPDF = (buffer: Buffer, folder: string = 'university/files'): Promise<{
  url: string;
  public_id: string;
  bytes: number;
}> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        resource_type: 'auto',
        folder,
        format: 'pdf',
        allowed_formats: ['pdf'],
        type: 'upload'
      },
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          reject(new Error('Failed to upload file to Cloudinary'));
        } else if (result) {
          resolve({
            url: result.secure_url,
            public_id: result.public_id,
            bytes: result.bytes
          });
        }
      }
    );

    // تحويل Buffer إلى Stream لرفعه إلى Cloudinary
    const bufferStream = new Readable();
    bufferStream.push(buffer);
    bufferStream.push(null);
    bufferStream.pipe(uploadStream);
  });
};

/**
 * دالة لحذف ملف من Cloudinary
 * @param publicId - المعرف العام للملف في Cloudinary
 * @returns وعد يؤكد نجاح الحذف
 */
export const deletePDF = (publicId: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(
      publicId,
      { resource_type: 'raw' },
      (error, result) => {
        if (error) {
          console.error('Cloudinary delete error:', error);
          reject(new Error('Failed to delete file from Cloudinary'));
        } else {
          resolve(result?.result === 'ok');
        }
      }
    );
  });
};

/**
 * دالة لتحويل رابط الملف إلى صورة مصغرة (لعرض معاينة PDF)
 * @param url - رابط الملف الأصلي
 * @returns رابط الصورة المصغرة
 */
export const generateThumbnail = (url: string): string => {
  if (!url) return '';
  
  try {
    const publicId = url.split('/').pop()?.split('.')[0];
    if (!publicId) return '';
    
    return cloudinary.url(publicId, {
      resource_type: 'image',
      transformation: [
        { format: 'png' },
        { page: 1 }, // الصفحة الأولى من PDF
        { width: 300, height: 300, crop: 'limit' },
        { quality: 'auto:good' }
      ]
    });
  } catch (error) {
    console.error('Thumbnail generation error:', error);
    return '';
  }
};

/**
 * دالة للتحقق من وجود ملف في Cloudinary
 * @param publicId - المعرف العام للملف
 * @returns وعد يحمل حالة الملف
 */
export const checkFileExists = (publicId: string): Promise<boolean> => {
  return cloudinary.api.resource(publicId, { resource_type: 'raw' })
    .then(() => true)
    .catch(() => false);
};

export default cloudinary;