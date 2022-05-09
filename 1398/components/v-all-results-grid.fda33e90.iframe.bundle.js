(window.webpackJsonp=window.webpackJsonp||[]).push([[9,10,16,20],{"./src/assets/image_not_available_placeholder.png":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/image_not_available_placeholder.png"},"./src/components/VAllResultsGrid/VAllResultsGrid.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_f76cbbf5da9c2936d5fdbb58483aa887/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),media=__webpack_require__("./src/stores/media/index.ts"),VImageCellSquare=__webpack_require__("./src/components/VAllResultsGrid/VImageCellSquare.vue"),VAudioCell=__webpack_require__("./src/components/VAllResultsGrid/VAudioCell.vue"),VLoadMore=__webpack_require__("./src/components/VLoadMore.vue"),VContentLink=__webpack_require__("./src/components/VContentLink/VContentLink.vue"),VGridSkeleton=__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue"),VAllResultsGrid_VAllResultsGridvue_type_script_lang_js_=Object(runtime.b)({name:"VAllResultsGrid",components:{VImageCellSquare:VImageCellSquare.default,VAudioCell:VAudioCell.default,VLoadMore:VLoadMore.default,VGridSkeleton:VGridSkeleton.default,VContentLink:VContentLink.default},props:["canLoadMore"],setup:function setup(_,_ref){var emit=_ref.emit,i18n=Object(runtime.q)().i18n,mediaStore=Object(media.a)(),resultsLoading=Object(runtime.a)((function(){return Boolean(mediaStore.fetchState.fetchingError)||mediaStore.fetchState.isFetching})),allMedia=Object(runtime.a)((function(){return mediaStore.allMedia})),isError=Object(runtime.a)((function(){return!!mediaStore.fetchState.fetchingError})),fetchState=Object(runtime.a)((function(){return mediaStore.fetchState})),errorHeader=Object(runtime.a)((function(){var type=i18n.t("browse-page.search-form.audio");return i18n.t("browse-page.fetching-error",{type:type})})),resultCounts=Object(runtime.a)((function(){return mediaStore.resultCountsPerMediaType})),noResults=Object(runtime.a)((function(){return fetchState.value.isFinished&&0===allMedia.value.length}));return{isError:isError,errorHeader:errorHeader,allMedia:allMedia,onLoadMore:function onLoadMore(){emit("load-more")},fetchState:fetchState,resultsLoading:resultsLoading,resultCounts:resultCounts,noResults:noResults}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VAllResultsGrid_VAllResultsGridvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",[_vm.noResults?_vm._e():_c("div",{staticClass:"results-grid grid grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6 gap-4 mb-4"},_vm._l(_vm.resultCounts,(function(ref){var mediaType=ref[0],count=ref[1];return _c("VContentLink",{key:mediaType,staticClass:"lg:col-span-2",attrs:{"media-type":mediaType,"results-count":count,to:_vm.localePath({path:"/search/"+mediaType,query:_vm.$route.query})}})})),1),_vm._v(" "),_vm.resultsLoading&&0===_vm.allMedia.length?_c("VGridSkeleton",{attrs:{"is-for-tab":"all"}}):_c("div",{staticClass:"results-grid grid grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6 gap-4"},_vm._l(_vm.allMedia,(function(item){return _c("div",{key:item.id},["image"===item.frontendMediaType?_c("VImageCellSquare",{key:item.id,attrs:{image:item}}):_vm._e(),_vm._v(" "),"audio"===item.frontendMediaType?_c("VAudioCell",{key:item.id,attrs:{audio:item}}):_vm._e()],1)})),0),_vm._v(" "),_c("VLoadMore",{staticClass:"mt-4"})],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VContentLink:__webpack_require__("./src/components/VContentLink/VContentLink.vue").default,VGridSkeleton:__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue").default,VImageCellSquare:__webpack_require__("./src/components/VAllResultsGrid/VImageCellSquare.vue").default,VAudioCell:__webpack_require__("./src/components/VAllResultsGrid/VAudioCell.vue").default,VLoadMore:__webpack_require__("./src/components/VLoadMore.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VAllResultsGrid",exportName:"default",description:"",tags:{},props:[{name:"canLoadMore",type:{name:"undefined"}}]}},"./src/components/VAllResultsGrid/VAudioCell.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue_composition_api=__webpack_require__("./node_modules/.pnpm/@vue+composition-api@1.4.9/node_modules/@vue/composition-api/dist/vue-composition-api.mjs"),VAudioTrack=__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue"),VAllResultsGrid_VAudioCellvue_type_script_lang_js_=Object(vue_composition_api.defineComponent)({components:{VAudioTrack:VAudioTrack.default},props:["audio"]}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VAllResultsGrid_VAudioCellvue_type_script_lang_js_,(function(){var _h=this.$createElement;return(this._self._c||_h)("VAudioTrack",{attrs:{audio:this.audio,layout:"box"}})}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAudioTrack:__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue").default}),__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"VAudioCell",description:"",tags:{},props:[{name:"audio",type:{name:"undefined"}}]}},"./src/components/VAllResultsGrid/VImageCellSquare.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.21.1/node_modules/core-js/modules/es.array.concat.js");var VLink=__webpack_require__("./src/components/VLink.vue"),VLicense=__webpack_require__("./src/components/VLicense/VLicense.vue"),errorImage=__webpack_require__("./src/assets/image_not_available_placeholder.png"),toAbsolutePath=function toAbsolutePath(url){var prefix=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://";return url.indexOf("http://")>=0||url.indexOf("https://")>=0?url:"".concat(prefix).concat(url)},VAllResultsGrid_VImageCellSquarevue_type_script_lang_js_={name:"VImageCell",components:{VLink:VLink.default,VLicense:VLicense.default},props:["image"],methods:{getImageUrl:function getImageUrl(image){if(!image)return"";var url=image.thumbnail||image.url;return toAbsolutePath(url)},getImageForeignUrl:function getImageForeignUrl(image){return toAbsolutePath(image.foreign_landing_url)},onImageLoadError:function onImageLoadError(event,image){var element=event.target;element.src!==image.url?element.src=image.url:element.src=errorImage},onFocusLeave:function onFocusLeave(event){this.$emit("focus-leave",event)}}},componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VAllResultsGrid_VImageCellSquarevue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("VLink",{staticClass:"group block focus:ring-[3px] focus:ring-pink focus:ring-offset-[3px] focus:outline-none rounded-sm",attrs:{itemprop:"contentUrl",title:_vm.image.title,href:"/image/"+_vm.image.id}},[_c("figure",{staticClass:"aspect-square relative rounded-sm",attrs:{itemprop:"image",itemscope:"",itemtype:"https://schema.org/ImageObject"}},[_c("img",{ref:"img",staticClass:"w-full h-full object-cover rounded-sm bg-dark-charcoal-10 text-dark-charcoal-10",attrs:{loading:"lazy",alt:_vm.image.title,src:_vm.getImageUrl(_vm.image),width:250,height:250,itemprop:"thumbnailUrl"},on:{error:function($event){return _vm.onImageLoadError($event,_vm.image)}}}),_vm._v(" "),_c("figcaption",{staticClass:"absolute left-0 bottom-0 invisible group-hover:visible group-focus:visible bg-white p-1 text-dark-charcoal"},[_c("span",{staticClass:"sr-only"},[_vm._v(_vm._s(_vm.image.title))]),_vm._v(" "),_c("VLicense",{attrs:{license:_vm.image.license,"hide-name":!0}})],1)])])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLicense:__webpack_require__("./src/components/VLicense/VLicense.vue").default,VLink:__webpack_require__("./src/components/VLink.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VImageCell",exportName:"default",description:"",tags:{},props:[{name:"image",type:{name:"undefined"}}],events:[{name:"focus-leave",type:{names:["undefined"]}}]}},"./src/components/VLoadMore.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var asyncToGenerator=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.16.5/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),dist_runtime=(__webpack_require__("./node_modules/.pnpm/regenerator-runtime@0.13.9/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_f76cbbf5da9c2936d5fdbb58483aa887/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs")),media=__webpack_require__("./src/stores/media/index.ts"),search=__webpack_require__("./src/stores/search.ts"),VButton=__webpack_require__("./src/components/VButton.vue"),VLoadMorevue_type_script_lang_ts_=Object(dist_runtime.b)({name:"VLoadMore",components:{VButton:VButton.default},setup:function setup(){var i18n=Object(dist_runtime.q)().i18n,mediaStore=Object(media.a)(),searchStore=Object(search.a)(),canLoadMore=Object(dist_runtime.a)((function(){return""!==searchStore.searchTerm&&mediaStore.fetchState.canFetch&&mediaStore.resultCount>0})),onLoadMore=function(){var _ref=Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(canLoadMore.value){_context.next=2;break}return _context.abrupt("return");case 2:return _context.next=4,mediaStore.fetchMedia({shouldPersistMedia:!0});case 4:case"end":return _context.stop()}}),_callee)})));return function onLoadMore(){return _ref.apply(this,arguments)}}(),isFetching=Object(dist_runtime.a)((function(){return mediaStore.fetchState.isFetching}));return{buttonLabel:Object(dist_runtime.a)((function(){return i18n.t("browse-page.load")})),isFetching:isFetching,onLoadMore:onLoadMore,canLoadMore:canLoadMore}}}),components_VLoadMorevue_type_script_lang_ts_=VLoadMorevue_type_script_lang_ts_,componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(components_VLoadMorevue_type_script_lang_ts_,(function(){var _h=this.$createElement;return(this._self._c||_h)("VButton",{directives:[{name:"show",rawName:"v-show",value:this.canLoadMore,expression:"canLoadMore"}],attrs:{size:"large",variant:"full",disabled:this.isFetching,"data-testid":"load-more"},on:{click:this.onLoadMore}},[this._v("\n  "+this._s(this.buttonLabel)+"\n")])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VButton:__webpack_require__("./src/components/VButton.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VLoadMore",exportName:"default",description:"",tags:{}}}}]);