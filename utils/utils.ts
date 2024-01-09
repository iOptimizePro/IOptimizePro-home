/**
 * 批量导入静态资源图片
 * nuxt3 下的静态资源图片的动态导入
 * @param url 文件路径
 * @returns any
 */
export const importImage: any = computed(() => (url: string) => {
  const glob: Record<string, any> = import.meta.glob(`~/assets/images/**/*`, {
    eager: true,
  })
  return glob[`${url}`]['default']
})

/**
 * 在页面所有图片加载完成后执行回调
 * @param callback 回调函数
 */
export function executeAfterImagesLoaded(callback: () => void): void {
  let count = 0
  const images = Array.from(document.querySelectorAll('img'))
  const checkImagesLoaded = (): void => {
    count++

    if (count === images.length) {
      callback()
    }
  }

  const checkComplete = (image: HTMLImageElement): void => {
    if (image.complete) {
      checkImagesLoaded()
    }
  }

  images.forEach((image) => {
    image.addEventListener('load', checkImagesLoaded)
    checkComplete(image)
  })

  if (images.length === 0) {
    callback()
  }
}
