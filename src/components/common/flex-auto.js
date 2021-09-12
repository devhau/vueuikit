import { h } from 'vue';

export const VHFlexAuto = {
    name: 'vh-flex-auto',
    setup(_, { slots }) {
        // return the render function
        return () =>
            h(
                'div',
                {
                    class: 'vh-flex-auto'
                }, slots
            );
    }
};
