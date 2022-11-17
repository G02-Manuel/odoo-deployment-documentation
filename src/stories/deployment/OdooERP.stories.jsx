import React from 'react';

import { GeneralEnviroment, ExternalModule } from './OdooERP';

export default {
    title: 'Deployment/OdooERP',
    component: GeneralEnviroment, ExternalModule,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const EnviromentTemplate = (args) => <GeneralEnviroment {...args} />;
const ExternalModuleTemplate = (args) => <ExternalModule {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Enviroment = EnviromentTemplate.bind({});
export const ExternalModules = ExternalModuleTemplate.bind({});
