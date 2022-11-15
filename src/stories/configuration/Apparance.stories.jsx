import React from 'react';

import { Apparance, Backend } from './Apparance';

export default {
    title: 'Configuration/Apparance',
    component: Apparance, Backend,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => <Apparance {...args} />;
const Template2 = (args) => <Backend {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Web = Template.bind({});
export const BackendTheme = Template2.bind({});