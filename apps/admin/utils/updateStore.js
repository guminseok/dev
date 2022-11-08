import create from "zustand";

export const flatStore = {
  id: "",
  title: "",
  content: "",
  user: "ATLAS",
  rendered: "",
  slug: "",
  date_published: "",
  date_modified: "",
  date_created: "",
  status: "公開",
  type: "",
  post_link: "",
  media_featured:
    "https://media.vwcity.net/wp-content/uploads/2022/10/banner2_s.jpg",
  modified_by: "ATLAS_2",
  excerpt: "",
  revisions: [],
  categoryList: [],
  tagList: [],
};

export const useKijiStore = create((set) => ({
  post: flatStore,

  setPost: (post) => {
    console.log("post store", post);
    set(() => ({
      post: post,
    }));
  },
  setContent: (content) =>
    set((state) => ({
      post: { ...state.post, content: content },
    })),
  setTitle: (title) =>
    set((state) => ({
      post: { ...state.post, title: title },
    })),
  setStatus: (status) => {
    console.log("setStatus, post store", status);
    set((state) => ({
      post: { ...state.post, status: status },
    }));
  },
}));
