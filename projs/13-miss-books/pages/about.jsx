export class About extends React.Component {

  state = {
    time: 0
  }

  startTime = Date.now()
  intervalId = null

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ time: parseInt((Date.now() - this.startTime) / 1000) })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const { time } = this.state
    return (
      <section className="about main-layout">
        <h2> 📚 About us</h2>
        <p>
          Miss Book is a <span>fake</span> book store (we don't really sell
          anything, especially not books). But, if you like reading, here is some
          'lorem ipsum' text just for you:
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eligendi
          exercitationem deserunt omnis perferendis placeat, optio rerum iusto
          harum distinctio sequi? Magnam repudiandae voluptatem architecto esse,
          molestias sint facere iste. Repellendus temporibus non natus delectus
          magnam eos, consequuntur provident, sint soluta dolorum aliquid
          consequatur? Quidem, nisi? Beatae itaque ducimus hic animi recusandae
          quaerat. Iste accusantium, alias fuga quae provident dignissimos.
          Obcaecati quos aliquam saepe perspiciatis praesentium harum, magnam
          atque fugiat quaerat, similique quasi eveniet corporis, neque explicabo.
          Ipsa, ab. Labore nisi quasi hic impedit voluptas iure aliquam, velit
          nesciunt architecto! Quaerat, tenetur ex dolorem, libero asperiores
          voluptatum cumque officia reiciendis, labore facilis facere quia! Nisi
          ratione hic aspernatur sit similique eveniet earum a iusto facilis velit
          mollitia, unde numquam quod. Dicta earum dolorum numquam corporis sunt
          exercitationem hic consequatur optio molestiae ullam ducimus unde facere
          illo atque alias fuga, esse, et rerum debitis dolor! Dolores cum
          corrupti omnis deleniti nostrum!
        </p>
        <p>By the way,<br />
          you are watching this page for {time} {time === 1 ? 'second' : 'seconds'}.</p>
      </section>
    )
  }
}
