import { IncomingForm, File } from 'formidable';
import { NextApiRequest } from 'next';

export const parseForm = (req: NextApiRequest): Promise<{ file: File }> => {
  const form = new IncomingForm({
    maxFileSize: 10 * 1024 * 1024, // 10MB
    allowEmptyFiles: false,
    multiples: false,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);

      // تأكد إن في ملف مرفوع
      const uploadedFile = files.file;
      if (!uploadedFile || Array.isArray(uploadedFile)) {
        return reject(new Error("No file uploaded or multiple files found."));
      }

      resolve({ file: uploadedFile });
    });
  });
};
