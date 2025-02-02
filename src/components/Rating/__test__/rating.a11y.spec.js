import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import Rating from './../';

describe('<Rating/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(<Rating label="Rating Label" />);
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
