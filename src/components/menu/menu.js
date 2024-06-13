import utils from "@/utils/utils";

const Menu = [
    {
        id: 'dashboard',
        name: utils.getTranslation('menu.dashboard'),
        icon: ['fas', 'chart-column'],
        path: '/home'
    },
    {
        id: 'tarefas',
        name: utils.getTranslation('menu.tarefas'),
        icon: ['far', 'circle-check'],
        path: '/tarefas'
    },
    {
        id: 'configuracoes',
        name: utils.getTranslation('menu.configuracoes'),
        icon: ['fas', 'gears'],
        path: '/configuracoes'
    }
];

export default Menu;