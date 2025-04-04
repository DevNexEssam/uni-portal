import React from 'react';
import { FiFileText } from 'react-icons/fi';
import { RecentlyUploadedFilesCardProps } from '../../types';


const RecentlyUploadedFilesCard = ({ fileName , course , date } : RecentlyUploadedFilesCardProps) => {
  return (
    <div className="space-y-4">
        <div
          className="flex items-center justify-between rounded-lg border border-slate-200 p-3 hover:bg-background"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10 text-primary">
              <FiFileText className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium text-foreground">{fileName}</p>
              <p className="text-xs text-foreground-secondary">{course}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-foreground-secondary">{date}</span>
          </div>
        </div>
    </div>
  );
};

export default RecentlyUploadedFilesCard;
