import React from 'react';

import { NginxMehotd } from './ Nginx';

export default {
    title: 'C. Nginx/Configuration',
    component: NginxMehotd,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const NginxTemplate = (args) => <NginxMehotd {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Nginx = NginxTemplate.bind({});