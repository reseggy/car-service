import { FC } from 'react';
import styles from './our-services-page.module.css';
import { OurServices } from '../../components/our-services';

import { useDispatch, useSelector } from '../../store/store';
import { RootState } from '../../store/store';
import { fetchServices } from '../../slices/servicesSlice';
import { useEffect } from 'react';

export const OurServicesPage: FC = () => {
  const dispatch = useDispatch();
  const { services, isLoading } = useSelector(
    (state: RootState) => state.services
  );

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <div className={styles.page}>
      <OurServices
        servicesElements={services}
        isLoading={isLoading}
        target='additional'
      />
    </div>
  );
};
