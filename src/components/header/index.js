import { AppBar, Toolbar, Typography } from '@material-ui/core';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography align="center" style={{ flexGrow: 1 }} variant="h6">
          Empresa ABC
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
