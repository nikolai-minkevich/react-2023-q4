import { FC } from 'react';
import './DetailedView.css';
import IEpisode from '../../interfaces/IEpisode';

type IDetailedViewProps = {
  detailedInfo: IEpisode;
};

const DetailedView: FC<IDetailedViewProps> = ({
  detailedInfo,
}): React.JSX.Element => {
  return <>{detailedInfo.title}</>;
};

export default DetailedView;
