import React from 'react';

import {
    GeneralEnviroment, ExternalModule, ServerConfMethod, HttpConfMethod, XMLRpcMethod,
    WebInterfaceMethod, TestMethod, LoggingMethod, SMTPMethod, DataBaseMethod, WorldMethod,
    SecurityMethod, AdvancedMethod, MultiProcessMethod
} from './OdooERP';

export default {
    title: 'Deployment/OdooERP',
    component: GeneralEnviroment, ExternalModule, ServerConfMethod, HttpConfMethod, XMLRpcMethod,
    WebInterfaceMethod, TestMethod, LoggingMethod, SMTPMethod, DataBaseMethod, WorldMethod, SecurityMethod,
    AdvancedMethod, MultiProcessMethod,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const EnviromentTemplate = (args) => <GeneralEnviroment {...args} />;
const ExternalModuleTemplate = (args) => <ExternalModule {...args} />;
const ServerConfMethodTemplate = (args) => <ServerConfMethod {...args} />;
const HttpConfMethodTemplate = (args) => <HttpConfMethod {...args} />;
const XMLRpcMethodTemplate = (args) => <XMLRpcMethod {...args} />;
const WebInterfaceMethodTemplate = (args) => <WebInterfaceMethod {...args} />;
const TestMethodTemplate = (args) => <TestMethod {...args} />;
const LoggingMethodTemplate = (args) => <LoggingMethod {...args} />;
const SMTPMethodTemplate = (args) => <SMTPMethod {...args} />;
const DataBaseMethodTemplate = (args) => <DataBaseMethod {...args} />;
const WorldMethodTemplate = (args) => <WorldMethod {...args} />;
const SecurityMethodTemplate = (args) => <SecurityMethod {...args} />;
const AdvancedMethodTemplate = (args) => <AdvancedMethod {...args} />;
const MultiProcessMethodTemplate = (args) => <MultiProcessMethod {...args} />;


// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Enviroment = EnviromentTemplate.bind({});
export const ExternalModules = ExternalModuleTemplate.bind({});
export const Server = ServerConfMethodTemplate.bind({});
export const Http = HttpConfMethodTemplate.bind({});
export const XMLRpc = XMLRpcMethodTemplate.bind({});
export const WebInterface = WebInterfaceMethodTemplate.bind({});
export const Test = TestMethodTemplate.bind({});
export const Logging = LoggingMethodTemplate.bind({});
export const SMTP = SMTPMethodTemplate.bind({});
export const Database = DataBaseMethodTemplate.bind({});
export const Internationalization = WorldMethodTemplate.bind({});
export const Security = SecurityMethodTemplate.bind({});
export const AdvanceOptions = AdvancedMethodTemplate.bind({});
export const MultiProcess = MultiProcessMethodTemplate.bind({});

