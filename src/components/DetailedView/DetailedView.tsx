import { Dispatch, FC, Key, SetStateAction } from 'react';
import './DetailedView.css';
import IEpisodeDetailed from '../../interfaces/IEpisodeDetailed';
import Loader from '../Loader';
import IWriter from '../../interfaces/IWriter';

type IDetailedViewProps = {
  detailedInfo: IEpisodeDetailed | null;
  setSelectedCard: Dispatch<SetStateAction<string | undefined>>;
};

const DetailedView: FC<IDetailedViewProps> = ({
  detailedInfo,
  setSelectedCard,
}: IDetailedViewProps): React.JSX.Element => {
  const handleClose = () => {
    setSelectedCard(undefined);
  };

  if (!detailedInfo) {
    return (
      <>
        <div className="detailed-view">
          <Loader />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="close-button" onClick={handleClose}>
        ❌
      </div>
      <div className="detailed-view">
        <div>
          <h2>{detailedInfo.title}</h2>
        </div>
        <div>{detailedInfo.series?.title}</div>
        {detailedInfo.yearFrom && detailedInfo.yearTo && (
          <>
            <div>
              Years in Star Trek cinematic universe: {detailedInfo.yearFrom}-
              {detailedInfo.yearTo}
            </div>
          </>
        )}

        {detailedInfo.seasonNumber && detailedInfo.episodeNumber && (
          <>
            <div>
              S{detailedInfo.seasonNumber}E{detailedInfo.episodeNumber}
            </div>
          </>
        )}

        <div>
          {detailedInfo.writers.length > 0 && <p>Writers:</p>}
          <ul>
            {detailedInfo.writers?.map((writer: IWriter, index: Key) => {
              return (
                <ul key={index}>
                  <li>
                    <div>{writer.name}</div>
                    {writer.dateOfBirth && writer.placeOfBirth && (
                      <>
                        <div>
                          Born {writer.dateOfBirth} at {writer.placeOfBirth}
                        </div>
                      </>
                    )}
                  </li>
                </ul>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DetailedView;
