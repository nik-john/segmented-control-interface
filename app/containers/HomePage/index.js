/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';

import Tab from '@material-ui/core/Tab';
import AudiencesContainer from 'containers/Audiences';
import BrandsContainer from 'containers/Brands';
import PartnersContainer from 'containers/Partners';
import TabPanel from 'components/TabPanel';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const tabs = [
  {
    label: 'Audiences',
    component: <AudiencesContainer />,
  },
  {
    label: 'Partners',
    component: <PartnersContainer />,
  },
  {
    label: 'Brands',
    component: <BrandsContainer />,
  },
];

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(tabs[0].label);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {tabs.map(tab => (
          <Tab value={tab.label} label={tab.label} />
        ))}
      </Tabs>
      {tabs.map(tab => (
        <TabPanel value={tab.label} index={value}>
          {tab.component}
        </TabPanel>
      ))}
    </Paper>
  );
}
