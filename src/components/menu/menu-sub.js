import { h, resolveComponent } from 'vue';
import { makeTextClass, } from './../../utils/class.util';
import { VHMenu } from './menu';
import { VHMenuLabel } from './menu-label';

export const VHMenuSub = {
    name: 'vh-menu-sub',
    props: {
        class: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        level: {
            type: Number,
            default: 0
        },
        sub: {
            type: Array,
            default: null
        }
    },
    setup(props) {
        const { class: classProps, sub, icon, title, level } = props;
        let className = makeTextClass('vh-menu-sub', '', classProps, '');
        const MenuLabel = resolveComponent(VHMenuLabel.name);
        const Menu = resolveComponent(VHMenu.name);
        // return the render function
        return () => [
            h(MenuLabel, {
                icon, title
            }),
            h(Menu, {
                source: sub,
                class: className,
                level
            })
        ];
    }
};