import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const colors = ['#dbb0a0', '#e0c2c0', '#eab586', '#b2481b', '#57394a'];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(statsItem => (
          <li
            className={s.item}
            key={statsItem.id}
            style={{
              backgroundColor:
                colors[randomIntegerFromInterval(0, colors.length - 1)],
            }}
          >
            <span className={s.label}>{statsItem.label}</span>
            <span className={s.percentage}>{`${statsItem.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;
