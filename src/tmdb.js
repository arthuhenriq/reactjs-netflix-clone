const API_KEY = '0fdb2279321bab38abe3869f822c0665';
const API_BASE = 'https://api.themoviedb.org/3'

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originais',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_netword=213`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: [],
            },
            {
                slug: 'topratted',
                title: 'Em alta',
                items: [],
            },
            {
                slug: 'action',
                title: 'Ação',
                items: [],
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: [],
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: [],
            },
            {
                slug: 'romancy',
                title: 'Românce',
                items: [],
            },
            {
                slug: 'documnetary',
                title: 'Documentários',
                items: [],
            },
        ]
    }
}