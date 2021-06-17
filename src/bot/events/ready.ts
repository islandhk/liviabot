import Event from "../struct/Event";

abstract class ReadyEvent extends Event {
  constructor() {
    super({
      name: "ready",
      once: true,
    });
  }

  async exec() {
    this.client.user!.setActivity("-help | IB is life. IB is god.", {
      type: "WATCHING",
    });

    setInterval(() => {
      this.client.user!.setActivity("-help | IB is life. IB is god.", {
        type: "WATCHING",
      });
    }, 3600000);

    console.log("[Bot] Ready.");
  }
}

export default ReadyEvent;
