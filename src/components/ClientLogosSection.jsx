import React from 'react';

const ClientLogosSection = ({ clients }) => {
  const colors = [
    'rgba(255,122,24,0.5)',
    'rgba(255,179,71,0.5)',
    'rgba(95,44,130,0.5)',
    'rgba(157,80,187,0.5)',
    'rgba(17,153,142,0.5)',
    'rgba(56,239,125,0.5)',
    'rgba(57,106,252,0.5)',
    'rgba(41,72,255,0.5)'
  ];

  return (
    <div className="row mt-5">
      <div className="col-12">
        <div className="row justify-content-center">
          {clients.map((client, index) => {
            const colorIndex = index % colors.length;
            return (
              <div key={client.name} className="col-6 col-md-3 col-lg-2 text-center mb-3">
                <div className="card tool-card" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: 'none', boxShadow: `inset 0 0 20px ${colors[colorIndex]}` }}>
                  <div className="card-body d-flex flex-column align-items-center">
                    {client.link ? (
                      <a href={client.link} target="_blank" rel="noopener noreferrer">
                        <img src={client.image} alt={client.name} style={{ width: 'auto', height: '100px', objectFit: 'contain' }} />
                      </a>
                    ) : (
                      <img src={client.image} alt={client.name} style={{ width: 'auto', height: '100px', objectFit: 'contain' }} />
                    )}
                    <p className="card-text mt-2">{client.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClientLogosSection;