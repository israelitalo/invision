import { TextField } from '@material-ui/core';
import { StandardTextFieldProps } from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { useStyles, Container } from './styles';
import { colors } from '../../styles/colors';

const InputCustom = withStyles({
    root: {
        '& .MuiInput-underline:before': {
            borderBottom: `1px solid ${colors.grey}`
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: colors.grey,
        },
        '& .MuiInput-underline:hover:before': {
            borderBottom: `2px solid ${colors.grey}`
        },
        '& .MuiInput-input': {
            color: colors.black,
            fontSize: 16,
            fontFamily: 'Mulish, sans-serif',
            fontWeight: 700,
        },
        '& label.MuiFormLabel-root': {
            color: colors.grey,
            fontSize: 14,
            fontFamily: 'Mulish, sans-serif',
        },
        '& .Mui-error': {
            color: colors.red,
            fontSize: 14,
            fontFamily: 'Mulish, sans-serif',
            textAlign: 'left',
        },
        '& .MuiFormLabel-root.Mui-error': {
            color: colors.red
        },
        '& .MuiInput-underline.Mui-error:after': {
            borderBottom: `1px solid ${colors.red}`
        },
        '& .MuiInput-underline.Mui-error:before': {
            borderBottom: `1px solid ${colors.red}`
        },
        '& .MuiInput-underline.Mui-error:hover:before': {
            borderBottom: `2px solid ${colors.red}`
        },
    },
})(TextField);

export const Input = ({ ...rest }: StandardTextFieldProps) => {
    const classes = useStyles();
    return (
        <Container>
            <InputCustom
                {...rest}
                className={classes.root}
            />
        </Container>
    );
};