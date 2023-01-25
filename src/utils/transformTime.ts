type transformTimeType = {
  format: 'default' | 'onlySeconds';
  isMinutes?: string;
  isSeconds?: string;
  totalSeconds?: number;
};

export const transformTime = ({
  format,
  isMinutes,
  isSeconds,
  totalSeconds,
}: transformTimeType) => {
  switch (format) {
    case 'onlySeconds':
      return +isMinutes! * 60 + +isSeconds!;
    default: {
      const minutes = Math.floor(totalSeconds! / 60);
      const seconds = totalSeconds! - +minutes * 60;
      return {
        minutes: minutes === 0 ? '' : String(minutes),
        seconds: seconds === 0 ? '' : String(seconds),
      };
    }
  }
};
