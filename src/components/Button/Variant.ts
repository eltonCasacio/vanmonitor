import Theme from '@styles/theme'

interface ButtonStyle {
  button: {
    backgroundColor: string;
    borderWidth?: number;
    borderColor?: string;
  };
  title: {
    color: string;
  };
  icon: {
    color: string;
    size: number;
    style: {
      marginLeft: number;
      marginRight: number;
    }
  }
}

export interface ButtonVariant {
  enabled: ButtonStyle;
  disabled: ButtonStyle;
}

const buttonPrimary: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: Theme.COLORS.GREEN,
    },
    title: {
      color: Theme.COLORS.WHITE,
    },
    icon: {
      color: Theme.COLORS.WHITE,
      size: 25,
      style: {
        marginLeft: 15,
        marginRight: 15
      }
    }
  },
  disabled: {
    button: {
      backgroundColor: Theme.COLORS.DESABLE,
    },
    title: {
      color: Theme.COLORS.WHITE_100,
    },
    icon: {
      color: Theme.COLORS.WHITE_100,
      size: 25,
      style: {
        marginLeft: 15,
        marginRight: 15
      }
    }
  }
}

const buttonOutline: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: Theme.COLORS.BLUE
    },
    title: {
      color: Theme.COLORS.GRAY1,
    },
    icon: {
      color: Theme.COLORS.GRAY1,
      size: 25,
      style: {
        marginLeft: 15,
        marginRight: 15
      }
    }
  },
  disabled: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: Theme.COLORS.BLUE
    },
    title: {
      color: Theme.COLORS.DESABLE,
    },
    icon: {
      color: Theme.COLORS.DESABLE,
      size: 25,
      style: {
        marginLeft: 15,
        marginRight: 15
      }
    }
  }
}

export const variants = { primary: buttonPrimary, outline: buttonOutline }
