import React from 'react';

import { DomainMethod } from './Domain';

export default {
    title: 'Domain/DNS',
    component: DomainMethod,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const DomainMethodTemplate = (args) => <DomainMethod {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const RecordsA = DomainMethodTemplate.bind({});