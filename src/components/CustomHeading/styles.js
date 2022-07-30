import { Typography, styled } from '@mui/material';

export const HeadingWrapper = styled(Typography)(
  ({ theme: { breakpoints, palette }, varianttype }) => {
    if (varianttype === 'subHead') {
      return {
        fontSize: '35px',
        fontWeight: 600,
        color: palette.text.secondary,
      };
    } else if (varianttype === 'subHeadText') {
      return {
        margin: '20px 25vw',
        [breakpoints.down('800')]: {
          margin: '20px 15vw',
        },
        [breakpoints.down('570')]: {
          margin: '20px 7vw',
        },
        [breakpoints.down('460')]: {
          margin: '20px 0',
        },
      };
    } else {
      return {};
    }
  }
);
