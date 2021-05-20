class Project
  attr_reader :title

  def initialize(title)
    @title = title
  end

  def add_backer(backer)
    ProjectBacker.new(self, backer)
  end

  # project has many projectBackers
  def project_backers
    # find all of this project's projectBackers
    ProjectBacker.all.select { |projectBacker_instance| projectBacker_instance.project == self }
  end

  # project has many backers through the projectBackers
  def backers
    # from those projectBackers, pull out the backers
    self.project_backers.map { |projectBacker_instance| projectBacker_instance.backer }
  end
end
