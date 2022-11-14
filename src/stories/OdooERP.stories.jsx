import React from 'react';

import { OdooERP } from './OdooERP';

export default {
    title: 'Deployment/OdooERP',
    component: OdooERP,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => <OdooERP {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const OdooEnviroment = Template.bind({});
