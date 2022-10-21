import { Category, useGetFeedbacksQuery } from '../store';

type Param = {
  key: string;
  value: string | Category[];
};

export const useGetFeedbackWithFilterQuery = (filters?: Param[]) => {
  

  const getParamsString = () => {
    const paramsString: string[] = [];
    if (!filters) return undefined;

    filters.map((param) => {
      if (Array.isArray(param.value)) {
        param.value.map((value) =>
          paramsString.push(`${param.key}=${value.name}`)
        );
      }
      if (typeof param.value === 'string') {
        paramsString.push(`${param.key}=${param.value}`);
      }
      return undefined;
    });

    return `?${paramsString.join('&')}`;
  };

  const data = useGetFeedbacksQuery(getParamsString());

  return data;
};
