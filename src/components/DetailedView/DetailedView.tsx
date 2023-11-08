import { FC, Key } from 'react';
import './DetailedView.css';
import Loader from '../Loader';
import IWriter from '../../interfaces/IWriter';
import { usePageStateContext } from '../../contexts/usePageStateContext';
import { useEpisodeResponseContext } from '../../contexts/useEpisodeResponseContext';

const DetailedView: FC = () => {
  const { setSelectedCard } = usePageStateContext();
  const { detailedInfo } = useEpisodeResponseContext();

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
        <div>
          Series: <strong>{detailedInfo.series?.title}</strong>
        </div>
        {detailedInfo.yearFrom && detailedInfo.yearTo && (
          <>
            <div>
              Years in Star Trek cinematic universe:{' '}
              <strong>
                {detailedInfo.yearFrom}-{detailedInfo.yearTo}
              </strong>
            </div>
          </>
        )}

        {detailedInfo.seasonNumber && detailedInfo.episodeNumber && (
          <>
            <div>
              Code:{' '}
              <strong>
                S{detailedInfo.seasonNumber}E{detailedInfo.episodeNumber}
              </strong>
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
                    <div>
                      <strong>{writer.name}</strong>
                    </div>
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
