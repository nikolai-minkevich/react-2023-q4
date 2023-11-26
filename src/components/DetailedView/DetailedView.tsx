import { FC, Key } from 'react';
import Loader from '../Loader';
import IWriter from '../../interfaces/IWriter';
import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { useGetEpisodeByIdQuery } from '../../services/stapi';
import { setSelectedCardId } from '../CardList/CardListSlice';

const DetailedView: FC = () => {
  const selectedCardId = useSelector(
    (state: RootState) => state.cardList.selectedCardId
  );
  const dispatch = useDispatch();

  const { data, isLoading } = useGetEpisodeByIdQuery(selectedCardId);
  const detailedInfo = data?.episode;

  if (isLoading || !detailedInfo) {
    return (
      <>
        <div className="detailed-view" aria-label="detailed card loader">
          <Loader />
        </div>
      </>
    );
  }
  return (
    <div aria-label="detailed card">
      <div
        className="close-button"
        onClick={() => dispatch(setSelectedCardId(''))}
        aria-label="close button"
      >
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
    </div>
  );
};

export default DetailedView;
