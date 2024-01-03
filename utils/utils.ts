/**
 * 批量导入静态资源图片
 * nuxt3 下的静态资源图片的动态导入
 * @param url 文件路径
 * @returns any
 */
export const importImage: any = computed(() => (url: string) => {
  const glob: Record<string, any> = import.meta.glob(`~/assets/images/**/*`, {
    eager: true
  });
  return glob[`${url}`]["default"];
});
