import { onBeforeMount, onMounted } from 'vue';

export function useGetPageData() {
  const system = useSystem();

  let type;

  async function getPageDataAction() {
    try {
      const res1 = await useFetch('/aaa');
      const res2 = await useFetch('/bbb');
    } catch (error) {
      console.log('---assets.js---1.9---', error);
      system.messageInstance.error(`服务异常,请联系管理员:${error}`);
    }
  }

  // 获取路由参数
  onBeforeMount(() => {
    const route = useRoute();
    type = route.query.type;
  });

  // 获取数据
  onMounted(async () => {
    await getPageDataAction();
  });
}
