import React from 'react';

import { ChartAccountConf, NCFConf, FiscalYearConf, CurrencyConf, DGIIReport } from './Account';

export default {
    title: 'Configuration/Accounting',
    component: ChartAccountConf, NCFConf, FiscalYearConf, CurrencyConf, DGIIReport,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const ChartAccountTemplate = (args) => <ChartAccountConf {...args} />;
const NCFTemplate = (args) => <NCFConf{...args} />;
const FiscalYearTemplate = (args) => <FiscalYearConf {...args} />;
const CurrencyConfTemplate = (args) => <CurrencyConf {...args} />;
const DGIIReportsTemplate = (args) => <DGIIReport {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const ChartOfAccount = ChartAccountTemplate.bind({});
export const NCFGenerate = NCFTemplate.bind({});
export const FiscalYear = FiscalYearTemplate.bind({});
export const Currency = CurrencyConfTemplate.bind({});
export const DGIIReports = DGIIReportsTemplate.bind({});