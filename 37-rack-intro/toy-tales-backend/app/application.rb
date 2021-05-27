class Application
  def call(env)
    req = Rack::Request.new(env)

    if req.path.match(/hello/)
      send_hello
    elsif req.path.match("/toys") && req.get?
      get_toys
    elsif req.path.match("/toys") && req.post?
      post_toy(req)
    else
      send_not_found
    end
  end

  private

  def send_hello
    return [200, { "Content-Type" => "application/json" }, [{ :message => "hello world!" }.to_json]]
  end

  def get_toys
    # gets toys from DB
    # serve them as json TO CLIENT
    toy_instances_arr = Toy.all
    # binding.pry
    [200, { "Content-Type" => "application/json" }, [toy_instances_arr.to_json]]
  end

  def post_toy(req)
    json_data = req.body.read
    toy_hash = JSON.parse(json_data)
    # binding.pry
    # create a toy in the db
    # new_data = Toy.create(toy_hash)
    new_toy = Toy.create(name: toy_hash["name"], likes: toy_hash["likes"], image: toy_hash["image"])
    # respond to the client!!!
    [201, { "Content-Type" => "application/json" }, [new_toy.to_json]]
  end

  def send_not_found
    [404, {}, ["Path not found!!!"]]
  end
end
