import React from 'react';

import { OdooERP, ExternalModules } from './OdooERP';

export default {
    title: 'Deployment/OdooERP',
    component: OdooERP, ExternalModules,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => <OdooERP {...args} />;
const Template2 = (args) => <ExternalModules {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const OdooEnviroment = Template.bind({});
export const OdooExternalModules = Template2.bind({});
