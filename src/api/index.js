import request from '@/api/request'

const login = (data) => request({url: '/login',method: 'post',data})

const addBook = (data) => request({url: '/book',method: 'post',data})

const getBooks = () => request({url: '/book',method: 'get'})

const getBook = (id) => request({url: `/book/${id}`,method: 'get'})

const updateBook = (id,data) => request({url: `/book/${id}`,method: 'put',data})

const deleteBook = (id) => request({url: `/book/${id}`,method: 'delete'})

const addChapter = (data) => request({url: '/chapter',method: 'post',data})

const getChapters = (id) => request({url: `/chapter/${id}`,method: 'get'})

const updateChapter = (id,data) => request({url: `/chapter/${id}`,method: 'put',data})

const deleteChapter = (id) => request({url: `/chapter/${id}`,method: 'delete'})

const addSection = (data) => request({url: '/section',method: 'post',data})

const getSections = (chapters_id) => request({url: `/section?chapters_id=${chapters_id}`,method: 'get'})

const getSection = (id) => request({url: `/section/${id}`,method: 'get'})

const updateSection = (id,data) => request({url: `/section/${id}`,method: 'put',data})

const deleteSection = (id) => request({url: `/section/${id}`,method: 'delete'})

const addBlog = (data) => request({url: '/blog',method: 'post',data})

const getBlog = (id) => request({url: `/blog/${id}`,method: 'get'})

const getBlogs = () => request({url: `/blog`,method: 'get'})

const updateBlog = (id,data) => request({url: `/blog/${id}`,method: 'put',data})

const deleteBlog = (id) => request({url: `/blog/${id}`,method: 'delete'})

const getUsers = () => request({url: `/user`,method: 'get'})

const removeUser = (id) => request({url: `/user/${id}`,method: 'delete'})

const addResource = (data) => request({url: '/resource',method: 'post',data})

const getResources = () => request({url: '/resource',method: 'get'})

const updateResource = (id,data) => request({url: `/resource/${id}`,method: 'put',data})

const deleteResource = (id) => request({url: `/resource/${id}`,method: 'delete'})

const addVideo = (data) => request({url: '/video',method: 'post',data})

const getVideos = () => request({url: '/video',method: 'get'})

const getVideo = (id) => request({url: `/video/${id}`,method: 'get'})

const updateVideo = (id,data) => request({url: `/video/${id}`,method: 'put',data})

const deleteVideo = (id) => request({url: `/video/${id}`,method: 'delete'})

const imgUpload = (data) => request({url: `/upload`,method: 'post',data,headers: { "Content-Type": "multipart/form-data" }})

const imgDel = (name) => request({url: `/upload/${name}`,method: 'delete'})

const getPriorityBooks = () => request({url: `/select/books`,method: 'get'})

const getPriorityBlogs = () => request({url: `/select/blogs`,method: 'get'})

const getPriorityVideos = () => request({url: `/select/videos`,method: 'get'})

const getSwiper = () => request({url: `/select/swiper`,method: 'get'})

const RecommendBook = () => request({url: `/select/book`,method: 'get'})

const RecommendBlog = () => request({url: `/select/blog`,method: 'get'})

const getSearch = (word) => request({url: `/select/search`,method: 'get',params:{word}})

export default {
  imgUpload,
  login,
  addBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
  addChapter,
  getChapters,
  updateChapter,
  deleteChapter,
  addSection,
  getSections,
  updateSection,
  deleteSection,
  getSection,
  addBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
  getUsers,
  removeUser,
  addResource,
  getResources,
  updateResource,
  deleteResource,
  addVideo,
  getVideos,
  getVideo,
  updateVideo,
  deleteVideo,
  imgDel,
  getPriorityBooks,
  getPriorityBlogs,
  getPriorityVideos,
  getSwiper,
  RecommendBook,
  RecommendBlog,
  getSearch
}