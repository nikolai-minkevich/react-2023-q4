import { FC, Key } from 'react';
import './DetailedView.css';
import IEpisodeDetailed from '../../interfaces/IEpisodeDetailed';
import Loader from '../Loader';
import IWriter from '../../interfaces/IWriter';

type IDetailedViewProps = {
  detailedInfo: IEpisodeDetailed;
};

const DetailedView: FC<IDetailedViewProps> = ({
  detailedInfo,
}): React.JSX.Element => {
  if (!detailedInfo) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <>
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
