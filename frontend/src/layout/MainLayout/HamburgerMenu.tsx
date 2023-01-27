import React from 'react';

import {
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { routes } from './routes';

const HamburgerMenu = () => {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  React.useEffect(() => {
    if (!isMobile) {
      setOpen(false);
    }
  }, [isMobile]);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  const sideList = () => (
    <Box
      p={2}
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(false)}
    >
      <List>
        {routes.map((route, index) => (
          <ListItem key={index}>
            <Link
              key={index}
              className='link'
              href={`/${route.toLowerCase()}`}
              underline='none'
              color='text.primary'
            >
              <Typography variant='h3'>{route}</Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        edge='start'
        sx={{
          fontSize: '8rem',
          color: 'black',
          height: 'fit-content',
        }}
        color='inherit'
        aria-label='menu'
        onClick={toggleDrawer(true)}
      >
        <Menu fontSize='large' />
      </IconButton>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
