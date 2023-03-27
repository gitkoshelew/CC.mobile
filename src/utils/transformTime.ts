export type formatTimeType = 'default' | 'onlySeconds';

type transformTimeType = {
  format: formatTimeType;
  minutes?: number;
  seconds?: number;
  totalSeconds?: number;
};

export type DefaultTimeType = {minutes: number; seconds: number};

export const transformTime = ({
  format,
  minutes,
  seconds,
  totalSeconds,
}: transformTimeType): number | DefaultTimeType => {
  switch (format) {
    case 'onlySeconds':
      return minutes! * 60 + seconds!;
    default: {
      const countMinutes = Math.floor(totalSeconds! / 60);
      const countSeconds = totalSeconds! - countMinutes * 60;
      return {
        minutes: countMinutes ? countMinutes : 0,
        seconds: countSeconds ? countSeconds : 0,
      };
    }
  }
};
