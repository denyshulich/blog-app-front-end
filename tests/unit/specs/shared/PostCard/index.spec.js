import { shallowMount } from '@vue/test-utils';
// import MatchMediaMock from 'jest-matchmedia-mock';
// eslint-disable-next-line
import matchMedia from '~/tests/unit/mocks/match-media';

import PostCard from '~/components/PostCard';
import PostCardImage from '~/components/PostCard/PostCardImage';
import PostCardImageCarousel from '~/components/PostCard/PostCardImageCarousel';
import PostCardVideo from '~/components/PostCard/PostCardVideo';

// let matchMedia;

const postWithImage = {
    img: '',
    avtor: '',
    date: '',
    title: '',
    text: '',
    categories: [],
    comments: 0
};

const postWithSlider = {
    img: ['', ''],
    avtor: '',
    date: '',
    title: '',
    text: '',
    categories: [],
    comments: 0
};

const postWithVideo = {
    img: ['', ''],
    avtor: '',
    date: '',
    title: '',
    text: '',
    categories: [],
    comments: 0,
    video: ''
};

describe('PostCard', () => {
    function createPostCard(posts) {
        const wrapper = shallowMount(PostCard, {
            propsData: {
                posts
            }
            // mocks: {
            //     $device: {
            //         isMobileOrTablet: true
            //     }
            // },
            // stubs: ['NuxtLink', 'SvgIcon']
        });

        return wrapper;
    }

    test('render post card with image', () => {
        const wrapper = createPostCard(postWithImage);

        expect(wrapper.element).toMatchSnapshot();

        expect(wrapper.findComponent(PostCardImage).exists()).toBe(true);
    });

    test('render post card with slider', () => {
        const wrapper = createPostCard(postWithSlider);

        expect(wrapper.element).toMatchSnapshot();

        expect(wrapper.findComponent(PostCardImageCarousel).exists()).toBe(true);
    });
    test('render post card with slider', () => {
        const wrapper = createPostCard(postWithVideo);

        expect(wrapper.element).toMatchSnapshot();

        expect(wrapper.findComponent(PostCardVideo).exists()).toBe(true);
    });
});
