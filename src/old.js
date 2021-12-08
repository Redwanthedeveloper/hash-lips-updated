import React from 'react';
export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: var(--secondary);
  padding: 10px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 120px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 800px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

const styles = {
  maxWidth: '80%',
  margin: 'auto',
  width: '100%',
  display: 'flex',
};

const old = () => {
  return (
    <div>
      <s.Screen>
        <s.Container
          flex={1}
          ai={'center'}
          style={{ padding: 24, backgroundColor: '#ee81f6' }}
          // image={CONFIG.SHOW_BACKGROUND ? '/config/images/bg.png' : null}
        >
          <StyledLogo alt={'logo'} src={logo} />
          <s.SpacerSmall />
          <ResponsiveWrapper style={{ padding: 24 }} test>
            <div className='main__wrapper' style={styles}>
              <div className='left__wrapper'>
                <StyledImg alt={'example'} src={gifImage} />
              </div>
              <div className='right__wrapper'>
                <h3>
                  {data.totalSupply} / {CONFIG.MAX_SUPPLY}
                </h3>
              </div>

              <s.SpacerLarge />
              <s.Container
                jc={'center'}
                ai={'center'}
                className='right__wrapper'
              >
                <s.TextTitle
                  style={{
                    textAlign: 'center',
                    fontSize: 50,
                    fontWeight: 'bold',
                    color: 'var(--accent-text)',
                  }}
                >
                  {data.totalSupply} / {CONFIG.MAX_SUPPLY}
                </s.TextTitle>
                <s.TextDescription
                  style={{
                    textAlign: 'center',
                    color: 'var(--primary-text)',
                  }}
                >
                  <StyledLink target={'_blank'} href={CONFIG.SCAN_LINK}>
                    {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
                  </StyledLink>
                </s.TextDescription>
                <s.SpacerSmall />
                {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                  <>
                    <s.TextTitle
                      style={{
                        textAlign: 'center',
                        color: 'var(--accent-text)',
                      }}
                    >
                      The sale has ended.
                    </s.TextTitle>
                    <s.TextDescription
                      style={{
                        textAlign: 'center',
                        color: 'var(--accent-text)',
                      }}
                    >
                      You can still find {CONFIG.NFT_NAME} on
                    </s.TextDescription>
                    <s.SpacerSmall />
                    <StyledLink
                      target={'_blank'}
                      href={CONFIG.MARKETPLACE_LINK}
                    >
                      {CONFIG.MARKETPLACE}
                    </StyledLink>
                  </>
                ) : (
                  <>
                    <s.TextTitle
                      style={{
                        textAlign: 'center',
                        color: 'var(--accent-text)',
                      }}
                    >
                      1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{' '}
                      {CONFIG.NETWORK.SYMBOL}.
                    </s.TextTitle>
                    <s.SpacerXSmall />
                    <s.TextDescription
                      style={{
                        textAlign: 'center',
                        color: 'var(--accent-text)',
                      }}
                    >
                      Excluding gas fees.
                    </s.TextDescription>
                    <s.SpacerSmall />
                    {blockchain.account === '' ||
                    blockchain.smartContract === null ? (
                      <s.Container ai={'center'} jc={'center'}>
                        <s.TextDescription
                          style={{
                            textAlign: 'center',
                            color: 'var(--accent-text)',
                          }}
                        >
                          Connect to the {CONFIG.NETWORK.NAME} network
                        </s.TextDescription>
                        <s.SpacerSmall />
                        <StyledButton
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                            getData();
                          }}
                        >
                          CONNECT
                        </StyledButton>
                        {blockchain.errorMsg !== '' ? (
                          <>
                            <s.SpacerSmall />
                            <s.TextDescription
                              style={{
                                textAlign: 'center',
                                color: 'var(--accent-text)',
                              }}
                            >
                              {blockchain.errorMsg}
                            </s.TextDescription>
                          </>
                        ) : null}
                      </s.Container>
                    ) : (
                      <>
                        <s.TextDescription
                          style={{
                            textAlign: 'center',
                            color: 'var(--accent-text)',
                          }}
                        >
                          {feedback}
                        </s.TextDescription>
                        <s.SpacerMedium />
                        <s.Container ai={'center'} jc={'center'} fd={'row'}>
                          <StyledRoundButton
                            style={{ lineHeight: 0.4 }}
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              decrementMintAmount();
                            }}
                          >
                            -
                          </StyledRoundButton>
                          <s.SpacerMedium />
                          <s.TextDescription
                            style={{
                              textAlign: 'center',
                              color: 'var(--accent-text)',
                            }}
                          >
                            {mintAmount}
                          </s.TextDescription>
                          <s.SpacerMedium />
                          <StyledRoundButton
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              incrementMintAmount();
                            }}
                          >
                            +
                          </StyledRoundButton>
                        </s.Container>
                        <s.SpacerSmall />
                        <s.Container ai={'center'} jc={'center'} fd={'row'}>
                          <StyledButton
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              claimNFTs();
                              getData();
                            }}
                          >
                            {claimingNft ? 'BUSY' : 'BUY'}
                          </StyledButton>
                        </s.Container>
                      </>
                    )}
                  </>
                )}
                <s.SpacerMedium />
              </s.Container>
            </div>
            <s.SpacerLarge />
          </ResponsiveWrapper>
          <s.SpacerMedium />
          <s.Container jc={'center'} ai={'center'} style={{ width: '70%' }}>
            <s.TextDescription
              style={{
                textAlign: 'center',
                color: 'var(--primary-text)',
              }}
            >
              Please make sure you are connected to the right network (
              {CONFIG.NETWORK.NAME} Mainnet) and the correct address. Please
              note: Once you make the purchase, you cannot undo this action.
            </s.TextDescription>
            <s.SpacerSmall />
            <s.TextDescription
              style={{
                textAlign: 'center',
                color: 'var(--primary-text)',
              }}
            >
              We have set the gas limit to {CONFIG.GAS_LIMIT} for the contract
              to successfully mint your NFT. We recommend that you don't lower
              the gas limit.
            </s.TextDescription>
          </s.Container>
        </s.Container>
      </s.Screen>
    </div>
  );
};

export default old;
