import { defaultTheme } from "react-admin";
import merge from "lodash/merge";
import { createTheme } from '@mui/material';

const palette = createTheme({
    palette: {
        type: 'light', // Switching the dark mode on is a single property value change.
        primary: {
            main: "#0d73ae",
        },
        secondary: {
            main: "#2799c5",
        },
    }
});


const typography = {
    fontFamilySecondary: "'Open Sans', sans-serif",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 16,
    fontStyle: "normal",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    color: palette.primary,
};

const typographyBase = {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    fontStyle: typography.fontStyle,
    color: typography.color,
};

const typographyHeader = {
    ...typographyBase,
    fontWeight: typography.fontWeightBold,
    fontFamily: typography.fontFamilySecondary,
};

const typographyBody = {
    ...typographyBase,
    fontWeight: typography.fontWeightRegular,
    fontFamily: typography.fontFamily,
};

const rawTheme = {
    palette,

    typography: {
        ...typographyBase,
        h1: {
            ...typographyHeader,
            textTransform: "uppercase",
            fontSize: "4rem",
        },
        h2: {
            ...typographyHeader,
            textTransform: "uppercase",
            fontSize: "3rem",
        },
        h3: {
            ...typographyHeader,
            fontSize: "2.75rem",
        },
        h4: {
            ...typographyHeader,
            fontSize: "2rem",
        },
        h5: {
            ...typographyHeader,
            fontWeight: typography.fontWeightMedium,
            fontSize: "1.5rem",
        },
        h6: {
            ...typographyHeader,
            fontWeight: typography.fontWeightMedium,
            fontSize: "1.25rem",
        },
        body1: {
            ...typographyBody,
            fontSize: "1rem",
        },
        body2: {
            ...typographyBody,
            fontSize: "1rem",
        },
        button: {
            ...typographyBody,
            fontSize: "1rem",
        },
        caption: {
            ...typographyBody,
            fontSize: "0.875rem",
            fontStyle: "italic",
        },
    },

    shape: {
        borderRadius: 0,
    },

    overrides: {
        // React-Admin
        RaAppBar: {
            title: {
                textTransform: "capitalize",
            },
        },

        // Material-UI

        MuiAppBar: {
            root: {
                background: `linear-gradient(127deg, #00ff00, #00ba00);`,
            },
        },
        MuiCard: {
            root: {
                border: "none",
            },
        },
        MuiButton: {
            root: {
                color: palette.primary,
            },
            sizeSmall: {
            },
            sizeLarge: {
            },
            contained: {
                boxShadow: "none",
            },
            containedPrimary: {
                color: "black",
                backgroundColor: palette.primary,
            },
            containedSecondary: {
                color: "black",
                backgroundColor: palette.secondary,
            },
            outlined: {},
            outlinedPrimary: {
                color: palette.primary,
                borderColor: palette.primary,
            },
            outlinedSecondary: {
                color: "black",
                borderColor: "black",
            },
            text: {},
            textPrimary: {
                color: palette.primary,
            },
            textSecondary: {
                color: palette.secondary,
            },
            label: {},
        },

        // React-Admin

        RaSidebar: {
            drawerPaper: {
                backgroundColor: "black",
                color: palette.primary,
                height: "100%",
                boxShadow:
                    "2px 0px 1px -1px rgba(0,0,0,0.2), 1px 0px 3px 0px rgba(0,0,0,0.1)",
            },
        },
        RaMenuItemLink: {
            active: {
                borderLeftStyle: "none",
                borderRightColor: palette.secondary,
                borderRightWidth: ".5px",
                borderRightStyle: "solid",
                backgroundColor: "red",
                color: palette.primary,
            },
            icon: {
                color: "inherit",
            },
        },
        RaLayout: {
            content: {
                height: "auto",
                backgroundColor: "black",
                paddingTop: "2px",
                paddingRight: "2px",
                paddingBottom: "2px",
                paddingLeft: "2px",
                display: "flex",
                flexDirection: "column",
                "& > div, & > h2": {
                    paddingTop: "2px",
                    paddingRight: "2px",
                    paddingBottom: "2px",
                    paddingLeft: "2px",
                },
            },
        },
        RaAppBar: {
            toolbar: {
                MuiIconButton: {
                    root: {
                        fontSize: "1.25rem",
                    },
                },
            },
        },
        RaTabbedShowLayout: {
            content: {
                marginTop: "2px",
                backgroundColor: "black",
                boxShadow: '1px 2px 9px #000',
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
        RaShow: {
            main: {
                marginTop: "2px",
            },
            noActions: {
                marginTop: "2px",
            },
        },
        RaFilter: {
            form: {},
            button: {
                "& button": {
                    borderStyle: "solid",
                    borderWidth: "2px",
                    borderColor: "gray",
                    textTransform: "uppercase",
                    fontWeight: typography.fontWeightBold,
                    color: palette.primary,
                    paddingLeft: "2px",
                    paddingRight: "2px",
                    paddingTop: "2px",
                    paddingBottom: "2px",
                },
            },
        },
        RaListToolbar: {
            toolbar: {
                paddingBottom: "2px",
                borderBottomStyle: "solid",
                borderBottomWidth: "1px",
                borderBottomColor: "gray",
                marginBottom: "2px",
            },
            actions: {
                marginRight: "0px",
            },
        },
    },
};

export const theme = createTheme(merge({}, defaultTheme, rawTheme));