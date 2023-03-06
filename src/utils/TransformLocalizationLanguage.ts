type TransformLocalizationLanguagePropsType = {
  difficulty: string;
};

export function TransformLocalizationLanguage({
  difficulty,
}: TransformLocalizationLanguagePropsType) {
  switch (difficulty) {
    case 'light': {
      return 'level.0';
    }
    case 'medium': {
      return 'level.1';
    }
    default: {
      return 'level.2';
    }
  }
}
