import { h } from 'vue';
import { makeTextClass, } from '../../utils/class.util';

export const VHPage = {
    name: 'vh-page',
    props: {
        class: {
            type: String,
            default: '',
        },
        config: {
            default: null,
        },
        module: {
            type: String,
            default: '',
        },
    },
    setup(props, { slots, attrs }) {
        const { class: classProps } = props;
        let className = makeTextClass('vh-page', '', classProps, '');
        // return the render function
        return () =>
            h(
                'div',
                {
                    ...attrs,
                    class: className,
                },
                slots
            );
    }
};
